'use strict';

/* App Module */

var TODOApp = angular.module('TODOApp',[]);


TODOApp.controller('todoCtrl', function($scope){
    //todolist initializing
    $scope.todoList = [
            {'done' : true,  'title':"주제 고르기"},
            {'done' : false, 'title':"작성하기"},
            {'done' : false, 'title':"놀기"}
        ];
     $scope.appName = 'Todo List';
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
/*
TODOApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/note-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).

      otherwise({
        redirectTo: '/phones'
      });
  }]);

  }
]);
*/

TODOApp.controller('NoteCtrl', function($scope){

    //Notelist initializing
    $scope.NoteList = [
            {'content':"메모1", 'order': 1},
            {'content':"메모2", 'order': 2},
            {'content':"메모3", 'order': 3}
    ];

     $scope.appName = 'Note List';
    //초기 할일 목록 설정


    //새로운 메모 추가
    $scope.save = function(message){
        $scope.NoteList.push({
        content:message,
        order: $scope.NoteList.length+1
        });
        $scope.message='';
    };

    //메모 삭제
    $scope.remove = function(Note){
        var index =$scope.NoteList.indexOf(Note);
        $scope.NoteList.splice(index,1);
    };

	//메모 작성 취소
	$scope.cancel = function(){
		$scope.message="";
	}

	//입력 가능 글자
	$scope.left  = function() {return $scope.message.length + " / " + 300;};

}); //NoteCtrl
