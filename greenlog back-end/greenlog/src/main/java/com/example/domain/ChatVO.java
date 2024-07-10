package com.example.domain;

import java.time.LocalDateTime;

public class ChatVO {
	private int chat_key;
	private String chat_content;
	private String chat_sender;
	private LocalDateTime chat_sendTime;
	private LocalDateTime chat_endTime;

	public int getChat_key() {
		return chat_key;
	}

	public void setChat_key(int chat_key) {
		this.chat_key = chat_key;
	}

	public String getChat_content() {
		return chat_content;
	}

	public void setChat_content(String chat_content) {
		this.chat_content = chat_content;
	}

	public String getChat_sender() {
		return chat_sender;
	}

	public void setChat_sender(String chat_sender) {
		this.chat_sender = chat_sender;
	}

	public LocalDateTime getChat_sendTime() {
		return chat_sendTime;
	}

	public void setChat_sendTime(LocalDateTime chat_sendTime) {
		this.chat_sendTime = chat_sendTime;
	}

	public LocalDateTime getChat_endTime() {
		return chat_endTime;
	}

	public void setChat_endTime(LocalDateTime chat_endTime) {
		this.chat_endTime = chat_endTime;
	}

	@Override
	public String toString() {
		return "ChatVO [chat_key=" + chat_key + ", chat_content=" + chat_content + ", chat_sender=" + chat_sender
				+ ", chat_sendTime=" + chat_sendTime + ", chat_endTime=" + chat_endTime + "]";
	}

}
