-module(seedRiak). 
% -export([for/1,start/0]). 
-export([start/0]). 

  % for(N) when N =< 10 -> 
  %  X = integer_to_list(N),
  %  Y = unicode:characters_to_list(["./jsonData/file", X, ".json"], latin1),
  %  io:fwrite("~p~n",[Y]),
  % for(N+1).

start() -> 
  % for(0).

{ok, Pid} = riakc_pb_socket:start("127.0.0.1", 8087),

MyBucket = <<"test">>,

Val1 = 1,

% Obj1 = riakc_obj:new(MyBucket, <<"one">>, Val1),
% riakc_pb_socket:put(Pid, Obj1).

{ok, Fetched1} = riakc_pb_socket:get(Pid, MyBucket, <<"one">>),
Val1 = binary_to_term(riakc_obj:get_value(Fetched1)),
io:fwrite("~p~n", [Val1]).

% erl -pa /Users/alex/Documents/hrsf110/riak-erlang-client/ebin/ /Users/alex/Documents/hrsf110/riak-erlang-client/deps/*/ebin /Users/alex/Documents/hrsf110/jsx
% {ok, Pid} = riakc_pb_socket:start("127.0.0.1", 8087).