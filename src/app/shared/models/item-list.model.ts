/*
 * Title:  Item List Model
 * Author: April Auger
 * Date:   26 March 2020
 * Description: The item list model.
 */

// Import Item Model
import { ItemModel } from './item.model';

export class ItemListModel {
	done: ItemModel[];
	todo: ItemModel[];
}