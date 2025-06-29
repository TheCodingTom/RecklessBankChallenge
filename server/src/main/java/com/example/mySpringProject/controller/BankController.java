package com.example.mySpringProject.controller;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.mySpringProject.model.Account;
import com.example.mySpringProject.service.BankService;

@RestController // tells Spring to handle HTTP requests in this class
@RequestMapping("/api") // base path for all endpoints
@CrossOrigin(origins = "http://localhost:5173") // so React can connect
public class BankController {

    @Autowired /*
                * tells Spring to inject (provide) the service object automatically instead of
                * writing BankService service = new BankService();
                */
    private BankService bankService;

    @GetMapping("/accounts")
    public List<Account> getAllAccounts() {
        return bankService.getAllAccounts();
    }

    @PostMapping("/accounts")
    public Account createAccount(@RequestBody Map<String, String> body) {
        return bankService.createAccount(body.get("id"));
    }

    @PostMapping("/accounts/{id}/deposit")
    public Account deposit(@PathVariable String id, @RequestBody Map<String, String> body) {
        BigDecimal amount = new BigDecimal(body.get("amount")); // parsing/converting amount from string to BigDecimal
        return bankService.deposit(id, amount);
    }

    @PostMapping("/accounts/{id}/withdraw")
    public Account withdraw(@PathVariable String id, @RequestBody Map<String, String> body) {
        BigDecimal amount = new BigDecimal(body.get("amount"));
        return bankService.withdraw(id, amount);
    }

    @PostMapping("accounts/{fromId}/transfer/{toId}")
    public Account transfer(@PathVariable String fromId, @PathVariable String toId,
            @RequestBody Map<String, String> body) {

        BigDecimal amount = new BigDecimal(body.get("amount"));
        return bankService.transfer(fromId, toId, amount);
    }
}