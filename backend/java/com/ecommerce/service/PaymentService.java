package com.ecommerce.api;

import com.ecommerce.model.Payment;
import com.ecommerce.repository.PaymentRepository;
import com.ecommerce.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PaymentAPI {
    @Autowired
    private PaymentService paymentService;

    @PostMapping("/pay")
    public String pay(@RequestBody Payment payment) {
        return paymentService.pay(payment);}}
