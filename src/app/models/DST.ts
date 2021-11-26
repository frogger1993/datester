export class LearningDesignBase {
  id: number;
  title: string;
  description: string;

  goalProfileId: string;
  goalProfileIdentifier: string;
  goalProfileName: string;

  conditionProfileId: string;
  conditionProfileIdentifier: string;
  conditionProfileName: string;
}

export class DST extends LearningDesignBase {
  plays: Play[];
}

export class Play extends LearningDesignBase {
  acts: Act[];
}

export class Act extends LearningDesignBase {
  structures: ActivityStructure[];
  activities: Activity[];
}

export class ActivityStructure extends LearningDesignBase {
  activities: Activity[];
}

export class Activity extends LearningDesignBase {
  visible: boolean;
  type: string;
  solved: boolean;
}


