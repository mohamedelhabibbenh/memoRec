package com.miniproject.backend.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "memos")
public class Memo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "title")
	private String title="";
	
	@Column(name="content")
	private String content="";

	@Column(name="date")
	private Date date = new Date() ;

	@Column(name="is_favorite")
	private boolean isFavorite=false;

	@Column(name="is_removed")
	private boolean isRemoved=false;

	@Column(name="color")
	private String color="#F6F6F6";
	
	//constructeurs
	public Memo() {}

	public Memo(String title, String content, boolean isFavorite, boolean isRemoved, String color) {
		super();
		this.title = title;
		this.content = content;
		this.isFavorite = isFavorite;
		this.isRemoved = isRemoved;
		this.color = color;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public boolean isFavorite() {
		return isFavorite;
	}

	public void setFavorite(boolean isFavorite) {
		this.isFavorite = isFavorite;
	}

	public boolean isRemoved() {
		return isRemoved;
	}

	public void setRemoved(boolean isRemoved) {
		this.isRemoved = isRemoved;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

}