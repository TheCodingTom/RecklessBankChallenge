package com.example.mySpringProject.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice /*
                       * Defines a global exception handler for the REST API
                       * Automatically applies to all controllers, catching exceptions and
                       * returning custom JSON responses instead of default error pages
                       */
public class GlobalExceptionHandler {

    // Handles any IllegalArgumentException thrown in the application
    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<Map<String, String>> handleIllegalArgument(IllegalArgumentException ex) {
        // Create a simple map to hold the error message
        Map<String, String> error = new HashMap<>();
        error.put("error", ex.getMessage()); // Add the exception message to the response
        // Return a 400 Bad Request response with the error map in the body
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
    }

}