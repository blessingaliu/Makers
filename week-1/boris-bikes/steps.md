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
```

</br>

4. Writing a unit test for a DockingStation Object 

```ruby
# Create a spec directory with these files 

└── spec
    ├── docking_station_spec.rb
    └── spec_helper.rb


# In docking_station_spec.rb
require 'docking_station'

describe DockingStation do

end

# In docking_station.rb 
class DockingStation

end 
```

</br>

4. Checking the feature test
```ruby
$ irb
2.2.2 :001 > require './lib/docking_station'
 => true
2.2.2 :002 > station = DockingStation.new
 => #<DockingStation:0x007fdac915c8f8>
2.2.2 :003 > bike = station.release_bike
 NoMethodError: undefined method `release_bike' for #<DockingStation:0x007fc1d4866828>
  from (irb):3
  from /Users/username/.rvm/rubies/ruby-2.2.2/bin/irb:11:in `<main>'
```
**We need to create a release_bike method**

</br>

5. Writing a unit test for the release bikes 
```ruby
# in spec/docking_station_spec.rb
describe DockingStation do
  it 'responds to release_bike' do
    expect(subject).to respond_to :release_bike
  end
end

# Or Ruby's one-liner syntax
describe DockingStation do
  it { is_expected.to respond_to :release_bike }
end

# Add release method to the DockingStation class 
```

</br>


6. Building a bike 
```ruby
# in irb 
- require './lib/docking_station'
- station = DockingStation.new
- bike = station.release_bike
- bike.working?

# We need Bikes to respond to working? First we need to Create a file spec/bike_spec.rb. 
```
- We can write our first unit test in spec/bike_spec.rb.

- RSpec unit test - (expect Bike class to respond to working? method)

- Create a Bike class with a working? method in the lib/bike.rb file

- require the bike.rb file in the bike spec file 

- Run rspec, it should be green now

</br>


7. Making Docking Station release Bikes 

- Write a test for the docking station object to release working bikes in docking_station_spec.rb   

- The release_bike method needs to release an instance of a bike class (Bike.new)

- You have to require_relative 'bike' in docking_station.rb or it would not know where to find the Bike class 

- Add true to the bike.working? method for rspec to pass


</br>


8. Using instance variables
```ruby
# This is what we want in irb 
$irb
2.2.0 :001 > require './lib/docking_station'
  => true
2.2.0 :002 > require './lib/bike'
  => true
2.2.0 :003 > bike = Bike.new
  => #<Bike:0x007fe022230258>
2.2.0 :004 > docking_station = DockingStation.new
  => #<DockingStation:0x009fe222234258>
2.2.0 :005 > docking_station.dock(bike)
  => #<Bike:0x007fe022230258>
```

- We want DockingStation instances to dock a Bike instance, and to read from an instance variable to return a docked bike.


- Add a unit test so that docking station objects can respond to a method dock that takes an argument of a bike

**(To be able to see a docked bike)
- The DockingStation instances must have the ability to remember docked bikes ('state') and the ability to report docked bikes ('behaviour')**

- Both storing something and permitting access to read that thing can be done using attributes or instance variables 

- Add an attribute reader to read the @bike attribute eg 
```ruby
# Read the @bike attribute on an instance
def bike
  @bike
end

# However this will essentially write the method above on any instances of this class
class DockingStation
  attr_reader :bike
end

# You can remove the bike method you previously created 
```

</br>


9.  Raising Exceptions

- Right now, the release_bike method in the Docking Station class actually instantiates a new Bike instance each time we want one released so this makes infinite bikes 

- We want an exception to be raised when there are no bikes available eg in irb 
```ruby
$ irb
2.1.5 :001 > require './lib/docking_station'
 => true
2.1.5 :002 > docking_station = DockingStation.new
 => #<DockingStation:0x007fe022230258 ...>
2.1.5 :003 > docking_station.release_bike
RuntimeError: No bikes available
  .... stack trace omitted ....
```

- We can set DockingStations to start empty so we'll need to  update our unit tests

- Update the release_bike method to return an instance of a bike (@bike)

- Write a unit test to check that an explicit error is raised when the station is empty.

- Add a fail line in the release_bike method before releasing an instance of a bike that sets the program to say "No bikes available" unless there is already a bike object

</br>

10. Using complex attributes

- Now we can dock bikes up to a capacity of 1, and to release_bike if there is a bike available. However we now want each docking station to accept 20 bikes

- We want to convert our instance variable @bike to reference a collection, allowing the docking and releasing of more than one bike. 

- We can use an array or a hash to store the collections object (@bikes = [])

- We can feature test it to see if we can dock 20 bikes in the docking station
```ruby
# In irb
- require './lib/docking_station'
- docking_station = DockingStation.new
- 20.times { docking_station.dock Bike.new }
- docking_station.dock Bike.new
```

- We can add a unit test to raise an error when the dock is full 

- Add an array to the code using the initialize method

- the release_bike method should fail if @bikes is empty and should add a bike to the array 

- the dock(bike) method should fail if the number of bikes is greater than or equal to 20

</br>


11. Isolating tests with Doubles 

- We can use a dummy object, a double, Unit Tests that interact with other classes.

- our dockingstation test is not isolated, it is dependent on the bike class

- A double is a temporary, disposable object that we can use as a stand-in for some other real object - like a Bike for example. 

- A little secret: it doesn't matter what symbol you use when creating a double using double :symbol

</br>


12. 
```ruby

```

</br>

13. 
```ruby

```

</br>


14. 
```ruby

```

</br>


15. 
```ruby

```

</br>
