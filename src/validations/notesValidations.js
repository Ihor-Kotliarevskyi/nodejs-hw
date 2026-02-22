import { Joi, Segments } from 'celebrate';
import { TAGS } from '../constants/tags.js';

export const createNoteSchema = {
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(1).required().messages({
      'string.base': 'Title must be a string',
      'string.min': 'Title should have at least {#limit} characters',
      'any.required': 'Title is required',
    }),
    content: Joi.string().messages({
      'number.base': 'Content must be a string',
    }),
    tag: Joi.string()
      .valid(TAGS)
      .messages({
        'string.base': 'Tag must be a string',
        'any.only': `Gender must be one of: ${TAGS}`,
      }),
  }),
};

export const updateNoteSchema = {
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(1).messages({
      'string.base': 'Title must be a string',
      'string.min': 'Title should have at least {#limit} characters',
    }),
    content: Joi.string().messages({
      'number.base': 'Content must be a string',
    }),
    tag: Joi.string()
      .valid(TAGS)
      .messages({
        'string.base': 'Tag must be a string',
        'any.only': `Gender must be one of: ${TAGS}`,
      }),
  }),
  [Segments.PARAMS]: Joi.object({
    noteId: Joi.string().required(),
  }),
};
