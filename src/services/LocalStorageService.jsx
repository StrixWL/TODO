import useFocus from "../hooks/useFocus";

const LocalStorage = {
	updateItems: (items) => {
		const _items = [];
		items.forEach((item) => {
			const _item = {
				title: item.title,
				done: item.done,
				isBeingEdited: false,
				count: item.count,
			};
			_item.title.length && _items.push(_item);
		});
		localStorage.setItem("items", JSON.stringify(_items));
	},
	getInitialItems: () => () => {
		const initialItems = JSON.parse(localStorage.getItem("items") || "[]");
		initialItems.forEach((item) => {
			[item.ref, item.focus] = useFocus();
		});
		return initialItems;
	},
};

export default LocalStorage;
