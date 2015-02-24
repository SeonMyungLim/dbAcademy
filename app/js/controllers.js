'use strict';

/* Controllers */


TODOApp.controller('todoCtrl', function($scope){
    //todolist initializing
    $scope.todoList = [
            {'done' : true,  'title':"주제 고르기"},
            {'done' : false, 'title':"작성하기"},
            {'done' : false, 'title':"놀기"}
        ];
     $scope.appName = 'To do List';
    //초기 할일 목록 설정


    //새로운 할 일 추가
    $scope.addNewTodo = function(newTitle){
        $scope.todoList.push({done:false, title:newTitle});
        $scope.newTitle='';
    };

    //완료한 일 삭제
    $scope.archive = function(){
        for(var i=$scope.todoList.length-1; i>=0; i--){
            if($scope.todoList[i].done){
                $scope.todoList.splice(i,1);
            }
        };
    };

    //남은 할 일 수 계산
    $scope.remain=function(){
        var remainCount=0;
        angular.forEach($scope.todoList, function(value, key){
         if(value.done ==false) remainCount++;
        })
         return remainCount;
    }
});

TODOApp.controller('NoteCtrl', function($scope){

    //Notelist initializing
    $scope.NoteList = [
            {'content':"메모1", 'order': 1, 'edit': true, 'modifyclick':false},
            {'content':"메모2", 'order': 2, 'edit': true, 'modifyclick':false},
            {'content':"메모3", 'order': 3, 'edit': true, 'modifyclick':false}
    ];

     $scope.appName = 'Note List';
    //초기 할일 목록 설정
	 $scope.message="";

    //새로운 메모 추가
    $scope.save = function(message){
		if(message.length == 0){
			alert("메모를 입력하세요.");
		}else{
			$scope.NoteList.push({
			content:message,
			order: $scope.NoteList[$scope.NoteList.length-1].order+1,
			edit:true,
			modifyclick:false
			});
			$scope.message="";
		}
    };
	var index;
    //메모 삭제
    $scope.remove = function(note){
        index =$scope.NoteList.indexOf(note);
        $scope.NoteList.splice(index,1);
    };

    //메모 작성 취소
    $scope.cancel = function(){
        $scope.message="";
    }
	
	var temp;
	//메모 수정
	$scope.modify = function(msg, note){
		index =$scope.NoteList.indexOf(note);
		temp = msg;
//		alert(temp);
		$scope.NoteList[index].edit = false;
		$scope.NoteList[index].modifyclick = true;
	}

	$scope.cancelMemo = function(note){
		index =$scope.NoteList.indexOf(note);
		$scope.NoteList[index].content = temp;
		$scope.NoteList[index].edit = true;
		$scope.NoteList[index].modifyclick = false;	
//		alert($scope.NoteList[index].content);
	}

	$scope.saveMemo = function(note){
		$scope.NoteList[index].edit = true;
		$scope.NoteList[index].modifyclick = false;
//		alert(msg);
	}
	
    //입력 가능 글자
	$scope.left  = function(msg) {return msg.length + " / " + 300;};

}); //NoteCtrl