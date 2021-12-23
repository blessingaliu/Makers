require 'docking_station'

describe DockingStation do
    it 'responds to release_bike' do
      expect(subject).to respond_to :release_bike
    end

    it 'releases a bike' do
        bike = Bike.new
        subject.dock(bike)
        # we want to release the bike we docked
        expect(subject.release_bike).to eq bike
    end

    it { is_expected.to respond_to(:dock).with(1).argument }

    it 'docks something' do
        bike = Bike.new
        # We want to return the bike we dock
        expect(subject.dock(bike)).to eq bike
    end

    it 'returns docked bikes' do
        bike = Bike.new
        subject.dock(bike)
        # Again, we need to return the bike we just docked
        expect(subject.bike).to eq bike
    end

    it 'raises an error when there are no bikes available' do
        # Let's not dock a bike first:
        # remember subject == DockingStation.new
        expect { subject.release_bike }.to raise_error 'No bikes available'
    end
end