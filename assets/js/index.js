const onClickAdd = () => {
	//テキストボックスの値を習得
	const inputTxt = document.getElementById("js__input--txt");
	//リストを習得
	const incompletelist = document.getElementById("todo__list--incomplete");
	const completelist = document.getElementById("todo__list--complete");

	//li生成
	const createLi = document.createElement("li");
	createLi.classList.add("todo__item");
	createLi.textContent = inputTxt.value;

	//button（完了）生成
	const createBtnComplete = document.createElement("button");
	createBtnComplete.classList.add("js__btn--complete");
	createBtnComplete.textContent = "完了";
	createBtnComplete.addEventListener("click", () => { //完了クリック時
		const targetDel = createBtnComplete.parentNode;
		console.log(targetDel);
		parentDel(targetDel, incompletelist);
		targetDel.appendChild(createBtnReturn);
		targetDel.removeChild(createBtnComplete);
		targetDel.removeChild(createBtnRemove);
		completelist.appendChild(targetDel);
	});

	//button（削除）生成
	const createBtnRemove = document.createElement("button");
	createBtnRemove.classList.add("js__btn--remove");
	createBtnRemove.textContent = "削除";
	createBtnRemove.addEventListener("click", () => { //削除クリック時
		const targetDel = createBtnRemove.parentNode;
		parentDel(targetDel, incompletelist);
	});

	//button（戻す）生成
	const createBtnReturn = document.createElement("button");
	createBtnReturn.classList.add("js__btn--return");
	createBtnReturn.textContent = "戻す";
	createBtnReturn.addEventListener("click", () => { //戻すクリック時
		const targetDel = createBtnReturn.parentNode;
		parentDel(targetDel, completelist);
		targetDel.appendChild(createBtnComplete);
		targetDel.appendChild(createBtnRemove);
		targetDel.removeChild(createBtnReturn);
		incompletelist.appendChild(targetDel);
	});

	//親要素削除の処理
	const parentDel = (target, list) => {
		list.removeChild(target);
		console.log(target);
		console.log(list);
	}

	//未完了リストにliとボタン追加
	incompletelist.appendChild(createLi);
	createLi.appendChild(createBtnComplete);
	createLi.appendChild(createBtnRemove);

	//テキストボックスの値を初期化
	inputTxt.value = ""
}

//追加ボタンクリック
document.getElementById("js__btn--add").addEventListener("click", () => {
	onClickAdd();
});