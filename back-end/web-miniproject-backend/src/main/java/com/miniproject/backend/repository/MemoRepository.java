package com.miniproject.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.miniproject.backend.model.Memo;

@Repository
public interface MemoRepository extends JpaRepository<Memo, Integer> {

}
