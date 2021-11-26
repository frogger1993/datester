export class DSTS {
  uuid: string;
  dst: string;
  learner: string;

  sessionActivities: DSTSActivity[];
}

export class DSTSActivity {
  updatedByDAC: string;
  completed: boolean;
  dstActivityId: number;
}

