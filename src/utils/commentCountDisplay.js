export const commentCountDisplay = commentCount => {
  if (commentCount === 0) {
    return 'No comments yet';
  } else if (commentCount === 1) {
    return '1 comment';
  } else {
    return `${commentCount} comments`;
  }
};
