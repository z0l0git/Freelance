import { Router } from "express";

import { postReviewController } from "../../controller/review/postReviewController";
import { getAllReviewsController } from "../../controller/review/getAllReviewController";
import { likeCounterController } from "../../controller/review/likeCounterController";

export const PostReview = Router();

PostReview.post("/postreview", postReviewController);
PostReview.post("/getallreview", getAllReviewsController);
