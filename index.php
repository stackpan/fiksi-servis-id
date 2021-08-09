<?php
$request = $_SERVER['REQUEST_URI'];

switch ($request) {
    case '/' :
        require __DIR__ . '/frontend/home/index.html';
        break;
    case '' :
        require __DIR__ . '/frontend/home/index.html';
        break;
    case '/map' :
        require __DIR__ . '/frontend/map/index.html';
        break;
    case '/request' :
        require __DIR__ . '/frontend/myrequest/index.html';
        break;
    case '/create-request' :
        require __DIR__ . '/frontend/create-request/select-category/index.html';
        break;
    case '/create-request/fill-detail' :
        require __DIR__ . '/frontend//create-request/fill-detail/index.html';
        break;
    default:
        http_response_code(404);
        break;
}