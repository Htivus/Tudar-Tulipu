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
			reference
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
		  id	 
		  title
		  description
		  date
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

export const PostDetails = `

query Post($id:ID!) {
	post(by: {id:$id}) {
	  title
	  description
	  image
	  date
	  createdBy {
		name
		email
		avatarUrl
		id
	  }
	}
  }
`;
