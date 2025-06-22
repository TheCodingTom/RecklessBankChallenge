package com.example.mySpringProject.service;

import java.math.BigDecimal;
import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.stereotype.Service;

import com.example.mySpringProject.model.Account;

@Service
public class BankService {

    // ConcurrentHashMap stores the account data in memory, no need for a DB
    private final Map<String, Account> accounts = new ConcurrentHashMap<>();

    public Account createAccount(String id) {
        Account acc = new Account(id);
        accounts.put(id, acc);
        return acc;
    }

    public void deposit(String id, BigDecimal amount) {
        Account account = accounts.get(id);
        if (account == null) {
            throw new IllegalArgumentException("Account not found: " + id);
        }
        account.deposit(amount);
    }

    public Account withdraw(String id, BigDecimal amount) {
        Account account = accounts.get(id);
        if (account == null) {
            throw new IllegalArgumentException("Account not found: " + id);

        }
        account.withdraw(amount);
        return account;
    }

    // public void transfer(String fromId, String toId, BigDecimal amount) { ... }

    public List<Account> getAllAccounts() {
        return new ArrayList<>(accounts.values());
    }
}
