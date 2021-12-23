require_relative 'bike'

class DockingStation
    attr_reader :bikes

    def initialize
        @bikes = []
    end

    def release_bike
       fail 'There are no bikes available' unless @bikes.length != 0
       @bikes.pop
    end 

    def dock(bike)
        fail 'Docking station is full' if @bikes.count >= 20
        @bikes.push(bike)
        bike
    end
end 