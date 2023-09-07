package com.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Login
{

	@Id
	private String uid;
	private String pswd;
	
	public Login()
	{
		super();
	
	}

	public Login(String uid, String pswd) {
		super();
		this.uid = uid;
		this.pswd = pswd;
	}

	public String getUid() {
		return uid;
	}

	public void setUid(String uid) {
		this.uid = uid;
	}

	public String getPswd() {
		return pswd;
	}

	public void setPswd(String pswd) {
		this.pswd = pswd;
	}
	
	
	
}
