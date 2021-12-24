require 'docking_station'
require 'bike'

describe DockingStation do
    it 'responds to release_bike' do
      expect(subject).to respond_to :release_bike
    end

    it 'releases a bike' do
        bike = Bike.new
        subject.dock(bike)
        # we want to release the bike we docked
        expect(subject.release_bike).to eql bike
    end

    it { is_expected.to respond_to(:dock).with(1).argument }

    it "is working" do
        bike = Bike.new
        subject.dock(Bike.new)
        bike = subject.release_bike
        expect(bike).to be_working 
    end

    it 'docks a bike' do
        bike = Bike.new
        # We want to return the bike we dock
        expect(subject.dock(bike)).to eq bike
    end

    it 'returns docked bikes' do
        bike = Bike.new
        subject.dock(bike)
        # Again, we need to return the bike we just docked
        expect(subject.bikes).to eq [bike]
    end

    it 'raises an error when there are no bikes available' do
        # Let's not dock a bike first:
        # remember subject == DockingStation.new
        docking_station = DockingStation.new
        expect {subject.release_bike}.to raise_error 'There are no bikes available'
    end

    it 'raises an error when full' do
        bike = Bike.new
        20.times { subject.dock double :bike }
        expect {subject.dock double (:bike) }.to raise_error 'Docking station is full'
    end
end