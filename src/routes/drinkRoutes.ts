import { Router } from 'express';
import { listDrinks, getDrink, addDrink, deleteDrink } from '../controllers/drinkController.ts';

export const drinkRoutes = Router();

drinkRoutes.get('/', listDrinks);
drinkRoutes.get('/:id', getDrink);
drinkRoutes.post('/', addDrink);
drinkRoutes.delete('/:id', deleteDrink);
