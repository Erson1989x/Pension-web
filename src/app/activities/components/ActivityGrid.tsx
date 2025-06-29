import ActivityCard from "./ActivityCard";

interface ActivityGridProps {
  activities: any[];
  onActivityClick: (activity: any) => void;
  categories: { id: string; name: string; color: string }[];
}

const ActivityGrid = ({ activities, onActivityClick, categories }: ActivityGridProps) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {activities.map((activity, index) => (
      <ActivityCard
        key={activity.id}
        activity={activity}
        onClick={() => onActivityClick(activity)}
        categories={categories}
      />
    ))}
  </div>
);

export default ActivityGrid;
