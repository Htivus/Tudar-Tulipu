export const getUserQuery = `
 query GetUser($email:String!){
    user(by:{email:$email}){
        id
        name
        email
        avatarUrl

    }
 }
`;

export const createUserMutation = `
	mutation CreateUser($input: UserCreateInput!) {
		userCreate(input: $input) {
			user {
				title
				email
				avatarUrl
				id
			}
		}
	}
`;

export const createPostMutation = `
  mutation CreatePost($input:PostCreateInput!){
      postCreate(input:$input){
		post{
			id
			title
			description
			date
			image
			createdBy {
				email
				name
			}
		}
	  }
  }
`;

export const postsQuery = `
query PostCollection {
	postCollection(first: 10) {
	  edges {
		node {
		  title
		  description
		  date
		  category
		  createdBy {
			email
			name
			avatarUrl
		  }
		  image
		}
	  }
	}
  }
`;
