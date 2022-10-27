const clickAdd = () => {
	//テキストボックスを習得
	const inputTxt = document.querySelector("#js__input--txt");

	//リストを習得
	const incompletelist = document.querySelector("#task__list--incomplete");
	const completelist = document.querySelector("#task__list--complete");

	//リストアイテム生成
	const createLi = document.createElement("li");
	createLi.classList.add("task__item");
	createLi.textContent = inputTxt.value;

	//ボタン（完了）生成
	const createBtnComplete = document.createElement("button");
	createBtnComplete.classList.add("js__btn--complete");
	createBtnComplete.textContent = "完了";
	createBtnComplete.addEventListener("click", () => { //完了クリック時
		const targetDel = createBtnComplete.parentNode;
		parentDel(targetDel, incompletelist);
		targetDel.appendChild(createBtnReturn);
		targetDel.removeChild(createBtnComplete);
		targetDel.removeChild(createBtnRemove);
		completelist.appendChild(targetDel);
	});

	//ボタン（削除）生成
	const createBtnRemove = document.createElement("button");
	createBtnRemove.classList.add("js__btn--remove");
	createBtnRemove.textContent = "削除";
	createBtnRemove.addEventListener("click", () => { //削除クリック時
		const targetDel = createBtnRemove.parentNode;
		parentDel(targetDel, incompletelist);
	});

	//ボタン（戻す）生成
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
	}

	//未完了リストにリストアイテム追加 ＆ エラーメッセージ
	if (createLi.textContent) {
		if(createLi.textContent.length <= 30){
			if (incompletelist.querySelectorAll(".task__item").length < 10) {
				incompletelist.appendChild(createLi);
				createLi.appendChild(createBtnComplete);
				createLi.appendChild(createBtnRemove);
			} else {
				const errMessage = document.createElement("p");
				errMessage.classList.add("message--error");
				errMessage.textContent = "※タスク上限です。";
				document.getElementById("task--incomplete").appendChild(errMessage);
			}
		} else {
			const errMessage = document.createElement("p");
			errMessage.classList.add("message--error");
			errMessage.textContent = "※文字数上限です。(30文字)";
			document.querySelector("#task--input").appendChild(errMessage);
		}
	}

	//テキストボックスの値を初期化
	inputTxt.value = ""
}

//追加ボタンクリック
document.querySelector("#js__btn--add").addEventListener("click", () => clickAdd());
//エンターキーでも発火
document.querySelector("#js__input--txt").addEventListener('keypress', returnkey);
function returnkey(e) {
	if (e.keyCode === 13) {
		clickAdd();
  } 
	  return false;
}
