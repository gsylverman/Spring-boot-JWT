package com.gavril.jwt.service;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class UserService implements UserDetailsService {
    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        // Get user form database
        String name = userName;
        if (userName.equals("admin")) {
            return new User("admin", "password", new ArrayList<>());
        }
        return new User("", "", new ArrayList<>());
    }
}
