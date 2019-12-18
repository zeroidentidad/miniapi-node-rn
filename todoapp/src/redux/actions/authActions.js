
exports.authUser = (user_id) => {
  return {
    type: 'AUTH_USER',
    user_id
  }
}

exports.unauthUser = {
  type: 'UNAUTH_USER'
}