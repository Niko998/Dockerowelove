@extends('layouts.app')

@section('title')
Addtask
@endsection



@section('content')
<div id="taskList"></div>

@endsection

@section('scripts')
<script src="{{ asset('js/task.js') }}" ></script>
@endsection