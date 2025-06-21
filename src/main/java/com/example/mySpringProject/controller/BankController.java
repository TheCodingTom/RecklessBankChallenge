package com.example.mySpringProject.controller;

import java.math.BigDecimal;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.mySpringProject.model.Account;
import com.example.mySpringProject.service.BankService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000") // so React can connect
public class BankController {

    @Autowired
    private BankService bankService;

    @PostMapping("/accounts")
    public Account createAccount(@RequestBody Map<String, String> body) {
        return bankService.createAccount(body.get("id"));
    }

    // @PostMapping("/accounts/{id}/deposit")
    // public void deposit(@PathVariable String id, @RequestBody Map<String, String>
    // body) {
    // BigDecimal amount = new BigDecimal(body.get("amount"));
    // bankService.deposit(id, amount);
    // }

    // Add withdraw and transfer endpoints here
}