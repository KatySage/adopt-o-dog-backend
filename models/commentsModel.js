const db = require("./conn");

class CommentsList {
  constructor(id, user_id, comment_text, date, dog_id) {
    this.id = id;
    this.user_id = user_id;
    this.comment_text = comment_text;
    this.date = date;
    this.dog_id = dog_id;
  }
  static async showAllCommentsDog(dog_id) {
    try {
      const response = await db.any(
        `SELECT * FROM comments WHERE dog_id = $1;`,
        [dog_id]
      );
      return response;
    } catch (error) {
      console.error("ERROR: ", error.message);
      return error.message;
    }
  }
  static async addComment(comment_text, title, date, dog_id) {
    try {
      const response = await db.result(
        `INSERT INTO comments (comment_text, title, date, dog_id) VALUES ($1, $2, $3, $4);`,
        [comment_text, title, date, dog_id]
      );
      return response;
    } catch (error) {
      console.error("ERROR: ", error.message);
      return error.message;
    }
}
    static async removeComment(id) {
        try {
            const response = await db.result(
                `DELETE FROM comments WHERE id = $1`,
                [id]
            );
            return response;
        } catch (error) {
            console.error('ERROR: ', error.message);
            return error.message;
        }
    }
}

module.exports = CommentsList;
