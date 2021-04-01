package com.miniproject.backend.controller;

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
public class MemoController {
	
	@Autowired
	private MemoRepository memoRepo;
	

    // create memo 
    @PostMapping("/memo/create")
    public boolean createMemo(@RequestBody Memo m) {
        //memo was saved successfuly
    	try { 	
        		memoRepo.save(m);
        		return true;
        	}
    	//error saving memo
        catch(Exception e){
        	return false;
        }
    }


    // update memo 
    @PutMapping("/memo/{id}")
    public ResponseEntity < Memo > updateMemo(@PathVariable int id, @RequestBody Memo _memo) {
    	Memo m = memoRepo.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Memo not exist with id :" + id));

    	m.setTitle(_memo.getTitle());
        m.setContent(_memo.getContent());
        m.setColor(_memo.getColor());
        m.setDate(_memo.getDate());
        m.setFavorite(_memo.isFavorite());
        m.setRemoved(_memo.isRemoved());
        Memo updatedMemo = memoRepo.save(m);
        return ResponseEntity.ok(updatedMemo);
    }
    
    // delete memo 
    @DeleteMapping("/memo/{id}")
    public boolean deleteMemo(@PathVariable int id) {
        Memo m = memoRepo.findById(id)
            .orElseThrow(null);
        //memo with this id was not found
        if(m==null) return false;
        
        //memo was deleted
        memoRepo.delete(m);
		return true;
    }
	
	
}
