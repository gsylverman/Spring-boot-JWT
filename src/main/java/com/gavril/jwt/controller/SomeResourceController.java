package com.gavril.jwt.controller;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/data")
public class SomeResourceController {

    @GetMapping
    public List<Student> getStudents() {
        List<Student> students = new ArrayList<>() {
            {
                add(new Student(UUID.randomUUID(), "Andrei", 5));
                add(new Student(UUID.randomUUID(), "George", 7));
                add(new Student(UUID.randomUUID(), "Cristian", 9));

            }
        };
        return students;
    }
}

@Data
@NoArgsConstructor
@AllArgsConstructor
class Student {
    private UUID id;
    private String name;
    private int grade;
}

