/*
 * Mini Project : memoRec
 * Created By : Ben Hssain Mohamed Elhabib 
 * Github : https://github.com/mohamedelhabibbenh
*/

package com.miniproject.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.miniproject.backend.model.Memo;
import com.miniproject.backend.repository.MemoRepository;

@SpringBootApplication
public class WebMiniprojectBackendApplication implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(WebMiniprojectBackendApplication.class, args);
	}

	@Autowired
	private MemoRepository memoRepo;
	
	// dummy memos
	@Override
	public void run(String... args) throws Exception {
		this.memoRepo.save(new Memo("web project" ,"dont forget to add viewing content",false,false,"#F6F6F6"));
		this.memoRepo.save(new Memo("8pm meeting" ,"i have a meeting with that uy to discuss stuff and do other things ,if it is not then have a nice day",false,false,"#F6F6F6"));
		this.memoRepo.save(new Memo("launch" ,"remeber to eat launch and do the dishes",false,false,"#F6F6F6"));
		this.memoRepo.save(new Memo("gym" ,"this week end go to gym",false,false,"#F6F6F6"));
		this.memoRepo.save(new Memo("prepare for pfe" ,"do research on stuff and things",false,false,"#F6F6F6"));
		this.memoRepo.save(new Memo("10 pm" ,"wake upa and do the homework of web",false,false,"#F6F6F6"));
		this.memoRepo.save(new Memo("create stuff and meet people" ,"go drink some tea mr mo7a-_-",false,false,"#F6F6F6"));
		this.memoRepo.save(new Memo("update application" ,"add language selecting",false,false,"#F6F6F6"));
		this.memoRepo.save(new Memo("web project" ,"add delete content and change background",false,false,"#F6F6F6"));
		this.memoRepo.save(new Memo("design" ,"Redesign everything because this thing is not working",false,false,"#F6F6F6"));

		
	}

}
