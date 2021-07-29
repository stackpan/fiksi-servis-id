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
    default:
        http_response_code(404);
        break;
}