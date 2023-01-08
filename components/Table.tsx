import {
  createStyles,
  Table as MantineTable,
  UnstyledButton,
  Group,
  Text,
  Center,
  Skeleton,
  ScrollArea,
} from "@mantine/core";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
  th: {
    padding: "0 !important",
    borderBottom: "2px solid #F2F4F6 !important",
  },

  td: {
    border: "none !important",
    padding: "0 !important",
  },

  tr: {
    borderBottom: "2px solid #F2F4F6",
    padding: `${theme.spacing.xs}px ${theme.spacing.xl}px !important`,
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "16px",
    color: "#1E1E1E",
    textTransform: "capitalize",

    "&:hover": {
      backgroundColor: "#F8FAFB",
    },
  },

  control: {
    width: "100%",
    padding: `${theme.spacing.xs}px ${theme.spacing.xl}px`,
    border: "none !important",
  },
  header: {
    position: "sticky",
    top: 0,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    transition: "box-shadow 150ms ease",

    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[3]
          : theme.colors.gray[2]
      }`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },

  icon: {
    width: 21,
    height: 21,
    borderRadius: 21,
  },
}));

interface IColumn {
  id?: string | number;
  name: string;
  accessor: string;
  sort?: boolean;
  Cell?: (val: unknown) => React.ReactNode;
}

interface TableSortProps {
  data: Record<string, any>[];
  column: IColumn[];
  sortedData: Record<string, any>[];
  setSorting?: (val: keyof Record<string, any>) => void;
  sortBy?: keyof Record<string, any> | null;
  reverseSortDirection?: boolean;
  isLoading?: boolean;
  height?: string;
}

interface ThProps {
  children: React.ReactNode;
  reversed: boolean;
  sorted: boolean;
  showSort: boolean;
  onSort(): void;
}

function Th({ children, reversed, sorted, onSort, showSort }: ThProps) {
  const { classes } = useStyles();
  // const Icon = sorted
  //   ? reversed
  //     ? BiChevronUp
  //     : BiChevronDown
  //   : HiOutlineSelector;
  return (
    <th className={classes.th}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Group position="apart">
          <Text
            weight={500}
            size="sm"
            className="text-xs font-medium text-[#778CA2]"
          >
            {children}
          </Text>
          {/* {showSort && (
              <Center className={classes.icon}>
                <Icon size={14} />
              </Center>
            )} */}
        </Group>
      </UnstyledButton>
    </th>
  );
}

function Table({
  data,
  height,
  column,
  sortBy,
  reverseSortDirection,
  sortedData,
  setSorting,
  isLoading,
}: TableSortProps) {
  const [scrolled, setScrolled] = useState(false);
  const { classes, cx } = useStyles();

  const EmptyState = () => (
    <tr>
      <td colSpan={Object.keys(column[0]).length}>
        <Text weight={500} align="center">
          No record found
        </Text>
      </td>
    </tr>
  );

  const renderRows = () => {
    if (sortedData.length === 0) {
      return <EmptyState />;
    }

    return sortedData.map((row, i) => (
      <tr key={i} className={classes.tr}>
        {column.map((col) => {
          if (col.Cell)
            return (
              <td key={col.id} className={classes.tr}>
                {col.Cell(row)}
              </td>
            );
          return (
            <td key={col.id} className={classes.tr}>
              {row[col.accessor]}
            </td>
          );
        })}
      </tr>
    ));
  };

  const loaders = Array(5)
    .fill("")
    .map((_, i) => (
      <tr key={i} className={classes.tr}>
        {column.map((col) => (
          <td key={col.id} className={classes.tr}>
            <Skeleton height={8} mt={6} width="100%" radius="xl" />
          </td>
        ))}
      </tr>
    ));

  return (
    <ScrollArea
      sx={{ height: height || 310 }}
      onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
    >
      <MantineTable
        horizontalSpacing="md"
        verticalSpacing="xs"
        sx={{
          border: "1px solid #DEE2E6",
          borderRadius: "10px",
        }}
      >
        <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
          <tr>
            {column.map((i, idx) => (
              <Th
                key={idx}
                showSort={i.sort ?? false}
                sorted={sortBy === i.accessor}
                reversed={reverseSortDirection ?? false}
                onSort={() => {
                  if (i.sort) {
                    setSorting?.(i.accessor as any);
                  }
                }}
              >
                {i.name}
              </Th>
            ))}
          </tr>
        </thead>
        <tbody>{isLoading ? loaders : renderRows()}</tbody>
      </MantineTable>
    </ScrollArea>
  );
}

export default Table;
