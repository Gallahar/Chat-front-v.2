export interface User {
	_id: string
	email: string
	username: string
	avatar: string
}

export interface UpdateAvatar {
	avatar: string
}

export interface UpdateUsername {
	username: string
}

export interface FindUserDto {
	value: string
	param: string
}
