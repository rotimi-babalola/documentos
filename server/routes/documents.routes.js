import express from 'express';
import documentController from '../controllers/documents.controllers';
import Authentication from '../middleware/authentication';

const router = express.Router();

// pagination too
router.route('/')
  .get(Authentication.decodeToken, documentController.getDocuments)
  .post(Authentication.decodeToken, documentController.createDocument);

// pagination for documents
router.route('/pagination')
  .post((req, res) => {
    res.redirect(`/pagination/documents/?limit=${req.body.limit}&offset=${req.body.offset}`);
  });

// Route to get role docs for a user
router.route('/role')
  .get(Authentication.decodeToken, documentController.getRoleDocs);

router.route('/:id')
  .get(Authentication.decodeToken, documentController.getDocById)
  .put(Authentication.decodeToken, documentController.updateDoc)
  .delete(Authentication.decodeToken, documentController.deleteDoc);

// Route to get documents for a user
router.route('/user/:id')
  .get(Authentication.decodeToken, Authentication.validateUser, documentController.getDocForUser);

// Route to search document
router.route('/search')
  .post((req, res) => {
    res.redirect(`/search/documents/?q=${req.body.query}`);
  });

// Route for a user to search their own docs
router.route('/search/user/:id')
  .post(Authentication.decodeToken, Authentication.validateUser, documentController.searchUserDoc);

export default router;
