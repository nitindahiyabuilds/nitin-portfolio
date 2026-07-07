import { pool } from '../config/db.js';

const ContactSubmission = {
  create: async ({ name, email, message }) => {
    const queryText = `
      INSERT INTO contact_submissions (name, email, message)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const values = [name, email, message];
    const result = await pool.query(queryText, values);
    return result.rows[0];
  }
};

export default ContactSubmission;
