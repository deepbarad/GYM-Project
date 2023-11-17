import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function WeekTable({ column }: any) {
  return (
    <>
      <div className="flex justify-center w-[1200px]">
        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>Time</TableColumn>
            <TableColumn>Workout</TableColumn>
            <TableColumn>Trainers</TableColumn>
            <TableColumn>Action</TableColumn>
          </TableHeader>
          <TableBody>
            {column.map((item: any, index: number) => {
              if (item?.title) return <span key={index}>{item?.title}</span>;
              return (
                <TableRow key={index}>
                  <TableCell>{item.time}</TableCell>
                  <TableCell>{item.workout}</TableCell>
                  <TableCell>{item.trainers}</TableCell>
                  <TableCell>
                    <Button color="warning">JOIN NOW</Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

export default WeekTable;
