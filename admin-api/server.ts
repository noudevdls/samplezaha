const express = require('express');
import {app } from "./api.test";
let PORT =2000;
app.listen(PORT,'0.0.0.0', () => {
    console.log('server is running on PORT:' +PORT);
    
});