import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function WeekTable({ column, data }: any) {
  const navigate = useNavigate();
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
            {data &&
              data?.map((item: any, index: number) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{item.time}</TableCell>
                    <TableCell>{item.workout}</TableCell>
                    <TableCell>{item.trainerName}</TableCell>
                    <TableCell>
                      <Button
                        color="warning"
                        onClick={() => navigate("/JoinForm")}
                      >
                        JOIN NOW
                      </Button>
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
