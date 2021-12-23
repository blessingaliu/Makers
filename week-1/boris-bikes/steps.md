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


8. 
```ruby

```

</br>


9.  
```ruby

```

</br>

10. 
```ruby

```

</br>