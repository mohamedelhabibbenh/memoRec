package com.miniproject.backend.view;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.miniproject.backend.exception.ResourceNotFoundException;
import com.miniproject.backend.model.Memo;
import com.miniproject.backend.repository.MemoRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/v1")
public class MemoView {
	
	@Autowired
	private MemoRepository memoRepo;
	

    // get all memo
    @GetMapping("/memo_list")
    public List < Memo > getAllMemos() {
        return memoRepo.findAll();
    }


    // get memo by id
    @GetMapping("/memo/{id}")
    public ResponseEntity < Memo > getMemoById(@PathVariable int id) {
    	Memo m = memoRepo.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Memo not exist with id :" + id));
        return ResponseEntity.ok(m);
    }

	
	
}
