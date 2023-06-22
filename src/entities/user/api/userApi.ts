import { FindUserDto, UpdateAvatar, UpdateUsername, User } from '@/shared/types/user.interface'
import { baseApi } from '../../../shared/api/baseApi'

export const userApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		findUsers: builder.query<User[], FindUserDto>({
			query: ({ value, param }) => ({
				url: `/user/find?value=${value}&search_by=${param}`,
				method: 'GET',
			}),
			providesTags: ['User'],
		}),
		findUserById: builder.query<User, string>({
			query: (id) => ({
				url: `/user/${id}`,
				method: 'GET',
			}),
			providesTags: ['User'],
		}),
		updateAvatar: builder.mutation<UpdateAvatar, UpdateAvatar>({
			query: (dto) => ({
				url: '/user/update-avatar',
				method: 'POST',
				data: dto,
			}),
			invalidatesTags: ['User'],
		}),
		updateUsername: builder.mutation<UpdateUsername, UpdateUsername>({
			query: (dto) => ({
				url: '/user/update-username',
				method: 'POST',
				data: dto,
			}),
			invalidatesTags: ['User'],
		}),
	}),
})

export const {
	useFindUsersQuery,
	useFindUserByIdQuery,
	useUpdateAvatarMutation,
	useUpdateUsernameMutation
} = userApi
