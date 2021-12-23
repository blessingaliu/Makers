## For Boris bikes 

1. Setting up a project 
```ruby
$ mkdir boris-bikes
$ cd boris-bikes
$ git init
$ gem install rspec
$ rspec --init
$ touch README.md
```

</br>

2. User Story:

As a person,
So that I can use a bike,
I'd like a docking station to release a bike.

As a person,
So that I can use a good bike,
I'd like to see if a bike is working

Organise the nouns and verbs into Objects and Messages

Objects	        Messages
Person	
Bike	        working?
DockingStation	release_bike

</br>

3. Writing a feature test in irb
```ruby
# if you run station = DockingStation.new in irb 
# You will get NameError: uninitialized constant DockingStation

This is because we need to create a DockingStation Object
````

</br>

4. Writing a unit test for a DockingStation Object 

```ruby
Create a spec directory with these files 

└── spec
    ├── docking_station_spec.rb
    └── spec_helper.rb
```
