package com.example.mySpringProject.service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.stereotype.Service;

import com.example.mySpringProject.model.Account;

@Service
public class BankService {

    private final Map<String, Account> accounts = new ConcurrentHashMap<>();

    public Account createAccount(String id) {
        Account acc = new Account(id);
        accounts.put(id, acc);
        return acc;
    }

    // public void deposit(String id, BigDecimal amount) { ... }

    // public void withdraw(String id, BigDecimal amount) { ... }

    // public void transfer(String fromId, String toId, BigDecimal amount) { ... }

    // public List<Account> getAllAccounts() {
    // return new ArrayList<>(accounts.values());
    // }
}
