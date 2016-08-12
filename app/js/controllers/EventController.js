/**
 * Created by jinfaxu on 8/5/16.
 */
'use strict';

myApp.controller('EventController',
    function EventController($scope) {
        $scope.event = {
            name: "Today is a nice day",
            date: "2016-08-12",
            time: "10: 09 am",
            location: {
                address: "1271 Ave of America",
                city: "New York",
                state: "NY"
            },
            imageURL: "/img/angularjs-logo.png",
            sessions: [
                {
                    name: 'Directives Masterclass',
                    creatorName: 'Bob Smith',
                    duration: '1h',
                    level: 'Advanced',
                    abstract: 'In this session you will learn the ins and outs of directives!'

                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: 'John Doe',
                    duration: '2h',
                    level: 'Introductory',
                    abstract: 'This session will take a closer look at scopes. Learn what they do, and hot to ge them to do it for you.'
                },
                {
                    name: 'Well Behaved Controllers',
                    creatorName:'Jane Doe',
                    duration: '2 hours',
                    level: 'Intermediate',
                    abstract: 'Controllers are the beginning of everything Angular does. Learn how to craft controllers aht will the respect of your friends and neighbors.'
                }
            ]
        }
    }
);