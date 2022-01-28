@extends('layouts.app')
@section('content')


@push('css')
    <style>
        th, td{
            vertical-align: middle !important;
        }
        .row-permissions{
            white-space: normal !important; word-wrap: break-word;
        }
    </style>
@endpush

<div class="header bg-gradient-primary pb-8 pt-5 pt-md-8">
    <div class="container-fluid">
        <div class="row">
            <div class="col">

                {{-- alert Display --}}
                @if (session('status'))
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    {{ session('status') }}
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                @endif

                <div class="card shadow">
                    {{-- Grid Header --}}
                    <div class="card-header border-0">
                        <div class="row align-items-center">
                            <div class="col-8">
                                <h3 class="mb-0">Permissions</h3>
                            </div>
                            @can('permission_create')
                            <div class="col-4 text-right">
                                <a  href="#" class="btn btn-sm btn-primary" data-toggle="modal" data-target="#permission-modal"  id="create-btn">Add Permission</a>
                            @include('includes.permission_modal_form')
                            </div>
                            @endcan
                        </div>
                    </div>

                    <div class="col-12">
                    </div>
                    {{-- Grid --}}
                    <div class="table-responsive">
                        <table class="table table-bordered text-center permissions-dataTable">
                            <thead>
                                <tr>
                                    <th>
                                        {{ trans('cruds.permission.fields.id') }}
                                    </th>
                                    <th>
                                        {{ trans('cruds.permission.fields.title') }}
                                    </th>
                                    <th>
                                        {{ trans('cruds.permission.fields.created_at') }}
                                    </th>
                                    <th>
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                    @forelse ($permissions as $permission)
                                        <tr data-entry-id="{{ $permission->id }}">
                                            <td>
                                                {{ $permission->id ?? '' }}
                                            </td>
                                            <td>
                                                {{ $permission->name ?? '' }}
                                            </td>
                                            <td class="text-lowercase">
                                                {{ $permission->created_at->format('Y-m-d h:i:s') }}
                                            </td>
                                            <td>
                                                @can('permission_edit')
                                                    <a  href="{{ route('permissions.edit', $permission->id) }}">
                                                        <i class="far fa-edit text-primary"></i>
                                                    </a>
                                                @endcan

                                                @can('permission_delete')
                                                    <form action="{{ route('permissions.destroy', $permission->id) }}" method="POST" style="display: inline-block;">
                                                        <input type="hidden" name="_method" value="DELETE">
                                                        <input type="hidden" name="_token" value="{{ csrf_token() }}">
                                                         <button type="submit" class="btn btn-link">
                                                            <i class="far fa-trash-alt text-danger delete-btn" style=" cursor: pointer;"></i>
                                                        </button>
                                                    </form>
                                                @endcan

                                            </td>
                                        </tr>
                                    @empty
                                    <tr>
                                        <td colspan="3">No Permission</td>
                                    </tr>
                                    @endforelse
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>

@push('js')
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script>
        $(document).ready(function () {
            var table = $('.permissions-dataTable').DataTable();
            $('.dataTables_filter').append('<i class=" fa fa-search dataTable-search"></i>');
        });
        $('.delete-btn').on('click', function() {
                swal({
                        title: "Are you sure?",
                        text: "you want to delete this Permission!",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                })
                .then((willDelete) => {
                    if (willDelete) {
                        $(this).closest('form').submit();
                        swal("Poof! Permission has been deleted!", {
                        icon: "success",
                        buttons: false,
                        });
                    } else {
                        swal("Permission is safe!", {
                            buttons: false,
                        });
                    }
                });
        });
    </script>
@endpush
@endsection
